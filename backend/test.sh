curl -X POST localhost:9000/create -H "Content-Type: application/json" -d '{"long_url": "http://www.google.com"}' | jq
sleep 1
curl -X POST localhost:9000/create -H "Content-Type: application/json" -d '{"long_url": "http://www.facebook.com"}' | jq
sleep 1
curl -X POST localhost:9000/create -H "Content-Type: application/json" -d '{"long_url": "http://www.bettycrocker.com"}' | jq
sleep 1
curl -X POST localhost:9000/lookup -H "Content-Type: application/json" -d '{"short_url": "http://www.short.url/ed646a3334ca891fd3467db131372140"}' | jq
sleep 1
curl -X POST localhost:9000/lookup -H "Content-Type: application/json" -d '{"short_url": "http://www.short.url/invalid_hash"}' | jq
