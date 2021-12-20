all: linux darwin

build:
	yarn build

run:
	yarn start

clean:
	rm -rf ./build/*

deploy:
	rm -rf ./build/*
	yarn build
	rsync -rlptD -e 'ssh -p 2802' build/ contato@gcp.rodolfo.io:/var/www/html
