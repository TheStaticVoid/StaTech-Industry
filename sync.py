# utility script to sync scripts / assets from the instance folder

import shutil, sys, os

# Change to your prism instance folder
instance_folder = 'F:/PrismLauncher/instances/StaTech Industry-1.1.15/minecraft'
current_dir = '.'
packwiz = os.getcwd() + '/packwiz.exe cf detect'

def copyFiles(folder):
    shutil.rmtree(current_dir + folder)
    shutil.copytree(instance_folder + folder, current_dir + folder, dirs_exist_ok=True)

# KubeJS sync
print('KubeJS sync start')
startup = '/kubejs/startup_scripts/'
server = '/kubejs/server_scripts/'
client = '/kubejs/client_scripts/'
assets = '/kubejs/assets/'
data = '/kubejs/data/'

# Copy startup scripts
print('-- Copying startup scripts')
copyFiles(startup)

# Copy sever scripts
print('-- Copying server scripts')
copyFiles(server)

# Copy client scripts
print('-- Copying client scripts')
copyFiles(client)

# Copy assets
print('-- Copying assets')
copyFiles(assets)

# Copy data
print('-- Copying data')
copyFiles(data)

print('KubeJS sync end')

if len(sys.argv) > 1:
    # Modlist sync - use -m argument
    if sys.argv[1] == '-m':
        print('Syncing mods')
        mods = '/mods/'
        copyFiles(mods)
        # delete the prism index folder
        shutil.rmtree(current_dir + mods + '.index')
        os.system(packwiz)
    # Quest sync - use -q argument
    elif sys.argv[1] == '-q':
        print('Syncing quests')
        quests = '/config/ftbquests/quests/'
        copyFiles(quests)
    # Config sync - use -c argument
    elif sys.argv[1] == '-c':
        print('Sycning mod configs')
        config = '/config/'
        copyFiles(config)

print('Done!')