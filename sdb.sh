
function etsy-reset-db(){
	cd app
	rm dev.db
	cd ..
	flask db upgrade
	flask seed all
}

function etsy-hard-reset-db(){
	clear
	cd migrations/versions
	rm -rf *
	cd ..
	cd ..
	cd app
	rm dev.db
	cd ..
	flask db migrate
	flask db upgrade
	flask seed all
	cd migrations/versions
	mv *.py migrationfile.py
	cd ..
}

echo "please type in 1 to rebuild a database"
echo "please type in 2 to re-create seed files and rebuild the database"
read -p ">" command
# echo command

if [ "$command" == "1" ]; then
    etsy-reset-db
elif [ "$command" == "2" ]; then
    echo "Are you sure you want this?"
    echo "You'll be replacing all migration files. [Y/n]"
    read -p ">" command2
    if [ "$command2" == "Y" ]; then
        etsy-hard-reset-db
    else
        echo "canceling. did you forget the capital Y?"
    fi
fi

echo "done"
