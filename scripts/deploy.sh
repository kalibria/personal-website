. .env.local

npm run build

aws s3 sync ./out "s3://$S3_BUCKET_NAME"

aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths '/*'

echo "Deployment completed!"
