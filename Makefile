build-container:
	uglifyjs --compress --mangle -- user-tracker.js > user-tracker.min.js
	docker-compose build

run:
	docker-compose up