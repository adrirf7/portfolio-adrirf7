@echo off
copy "C:\Users\arodr\Downloads\Adrian Rodriguez Fernandez CV (1).pdf" "C:\Proyectos-adrirf7\portfolio-adrirf7\public\Adrian.R-Cv.pdf"
if %errorlevel% equ 0 (
  echo CV actualizado correctamente
) else (
  echo Error al copiar el CV
)
