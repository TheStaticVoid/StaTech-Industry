@echo off
setlocal enabledelayedexpansion

REM Mode files should be placed in a /packmodes/NAME directory, where NAME is the name of the pack mode. packmodes should be in the /minecraft with this batch file

echo Modpack Mode Switcher by breck768

set "DIR=%~dp0/packmodes"

set /a count=0
set "choice="

REM Get folder names
for /f "delims=" %%G in ('dir /a:d /b "%DIR%"') do (
    set /a count+=1
    set "folder[!count!]=%%G"
)

REM Print folder names
for /l %%i in (1,1,!count!) do (
    echo %%i: !folder[%%i]!
)

REM Get menu options
for /l %%i in (1,1,!count!) do (
    set "choice=!choice!%%i"
)

choice /c !choice! /m "Switch to which mode?"
set "selection=!folder[%errorlevel%]!"

xcopy "%~dp0/packmodes/!selection!" "%~dp0" /s /e /i /y

pause