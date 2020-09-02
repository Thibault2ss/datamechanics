.PHONY: install
install:
	npm install
	
.PHONY: server
server:
	api/serve.sh

.PHONY: client
client:
	npm run dev