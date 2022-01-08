echo "[DEPLOY.SH] Pulling all new changes"
git pull
echo "[DEPLOY.SH] DONE"

echo "[DEPLOY.SH] Building new image"
export IMAGE_TAG=$(date +"%Y_%m_%d-%H_%M")-$(git rev-parse --short HEAD)
docker build -t bankless_api:$IMAGE_TAG .
echo "[DEPLOY.SH] DONE"

echo "[DEPLOY.SH] Deleting old container & running new one"
docker rm -f bankless_api_prod
docker run --detach --restart=always --env-file .env -p 4040:4040 --name bankless_api_prod bankless_api:$IMAGE_TAG
echo "[DEPLOY.SH] DONE"

echo " "
echo "[DEPLOY.SH] DEPLOYMENT HAS BEEN SUCCESSFULLY DONE"
