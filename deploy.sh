#!/usr/bin/env bash
# ==========================================================================
# deploy.sh — публикация портфолио на GitHub Pages
#
# Использование:
#   ./deploy.sh                 # создаст репозиторий portfolio и задеплоит
#   ./deploy.sh my-repo-name    # своё имя репозитория
#
# Требования: установленный и авторизованный gh CLI (gh auth login)
# ==========================================================================
set -euo pipefail

REPO_NAME="${1:-portfolio}"
BRANCH="main"
cd "$(dirname "$0")"

# --- проверки --------------------------------------------------------------
if ! command -v gh >/dev/null 2>&1; then
  echo "✗ gh CLI не найден. Установите: https://cli.github.com/"
  exit 1
fi

OWNER="$(gh api user -q .login 2>/dev/null || true)"
if [ -z "$OWNER" ]; then
  echo "✗ Нет доступа к GitHub. Выполните: gh auth login"
  exit 1
fi
echo "→ Аккаунт: $OWNER"

# --- git -------------------------------------------------------------------
if [ ! -d .git ]; then
  git init -q -b "$BRANCH"
fi

git add -A
if ! git diff --cached --quiet; then
  git commit -q -m "chore: update portfolio content"
fi

# --- репозиторий -----------------------------------------------------------
if gh repo view "$OWNER/$REPO_NAME" >/dev/null 2>&1; then
  echo "→ Репозиторий $OWNER/$REPO_NAME уже существует"
else
  echo "→ Создаю репозиторий $OWNER/$REPO_NAME"
  gh repo create "$REPO_NAME" --public \
    --description "Личное портфолио — GitHub Pages" \
    --source . --remote origin --push
fi

git remote get-url origin >/dev/null 2>&1 || \
  git remote add origin "https://github.com/$OWNER/$REPO_NAME.git"

git push -u origin "$BRANCH"

# --- GitHub Pages ----------------------------------------------------------
echo "→ Включаю GitHub Pages (ветка $BRANCH, корень)"
PAYLOAD="{\"source\":{\"branch\":\"$BRANCH\",\"path\":\"/\"}}"
if gh api "repos/$OWNER/$REPO_NAME/pages" >/dev/null 2>&1; then
  echo "$PAYLOAD" | gh api --method PUT "repos/$OWNER/$REPO_NAME/pages" --input - >/dev/null
else
  echo "$PAYLOAD" | gh api --method POST "repos/$OWNER/$REPO_NAME/pages" --input - >/dev/null
fi

# --- итог ------------------------------------------------------------------
URL="https://$OWNER.github.io/$REPO_NAME/"
echo
echo "✓ Готово. Сайт собирается 1–2 минуты:"
echo "  $URL"
echo
echo "  Репозиторий: https://github.com/$OWNER/$REPO_NAME"
echo "  Статус:      gh api repos/$OWNER/$REPO_NAME/pages --jq .status"
