IMAGE=drakery/puppeteer-webgl:latest

push-image:
	docker build -t ${IMAGE} .
	docker push ${IMAGE}

run:
	yarn bazelisk run //:server
