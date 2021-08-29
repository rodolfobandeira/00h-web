all: linux darwin

run:
	yarn start

clean:
	rm -rf ./build/*

deploy:
	rsync -a -e 'ssh -p 2802' ./build contato@gcp.rodolfo.io:/var/www/html
