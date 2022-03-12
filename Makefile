all: linux darwin

build:
	npm build

run:
	yarn start

clean:
	rm -rf ./build/*

deploy:
	rm -rf ./build/*
	yarn build --production
	rsync -rlptD --no-perms -O -e 'ssh -p 2802' build/ contato@gcp.rodolfo.io:/var/www/html
