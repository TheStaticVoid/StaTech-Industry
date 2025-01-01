# utility script to sync scripts / assets from the instance folder

import shutil, sys, os

instance_folder = 'F:/PrismLauncher/instances/StaTech 2.0 2/minecraft'
current_dir = '.'
packwiz = os.getcwd() + '/packwiz.exe cf detect'

# KubeJS sync
print('KubeJS sync start')
startup = '/kubejs/startup_scripts/'
server = '/kubejs/server_scripts/'
client = '/kubejs/client_scripts/'
assets = '/kubejs/assets/'
data = '/kubejs/data/'

# Copy startup scripts
print('-- Copying startup scripts')
shutil.rmtree(current_dir + startup)
shutil.copytree(instance_folder + startup, current_dir + startup, dirs_exist_ok=True)

# Copy sever scripts
print('-- Copying server scripts')
shutil.rmtree(current_dir + server)
shutil.copytree(instance_folder + server, current_dir + server, dirs_exist_ok=True)

# Copy client scripts
print('-- Copying client scripts')
shutil.rmtree(current_dir + client)
shutil.copytree(instance_folder + client, current_dir + client, dirs_exist_ok=True)

# Copy assets
print('-- Copying assets')
shutil.rmtree(current_dir + assets)
shutil.copytree(instance_folder + assets, current_dir + assets, dirs_exist_ok=True)

# Copy data
print('-- Copying data')
shutil.rmtree(current_dir + data)
shutil.copytree(instance_folder + data, current_dir + data)

print('KubeJS sync end')

# Config sync
print('Copying mod config')
config = '/config/'
shutil.rmtree(current_dir + config)
shutil.copytree(instance_folder + config, current_dir + config, dirs_exist_ok=True)

# Modlist sync - use -m argument
if len(sys.argv) > 1:
    if sys.argv[1] == '-m':
        print('Syncing mods')
        mods = '/mods/'
        shutil.rmtree(current_dir + mods)
        shutil.copytree(instance_folder + mods, current_dir + mods, dirs_exist_ok=True)
        # delete the prism index folder
        shutil.rmtree(current_dir + mods + '.index')
        os.system(packwiz)

print('Done!')