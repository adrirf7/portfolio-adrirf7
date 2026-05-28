@echo off
cd /d "C:\Proyectos-adrirf7\portfolio-adrirf7"
echo Deshaciendo ultimo commit...
git revert HEAD --no-edit
if %errorlevel% equ 0 (
  echo.
  echo Ahora pushing a GitHub...
  git push
  echo Commit revertido exitosamente
) else (
  echo Error al revertir el commit
)
pause
