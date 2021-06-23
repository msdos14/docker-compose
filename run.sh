#!/bin/bash
docker-compose up -d

export $(grep -v '#.*' .env | xargs)
echo "Open browser at http://$HQ_HOST:1341 and finish HQ installation"
