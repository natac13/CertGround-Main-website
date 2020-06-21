echo "Invalidating AWS CloudFront CDN Cache for certground.com"
# Get distribution ID
id=$(aws cloudformation describe-stacks --stack-name CertGround-Main-Website-Host --query "Stacks[0].Outputs[?OutputKey=='DistributionId'].OutputValue" --output text)


# # https://stackoverflow.com/questions/3601515/how-to-check-if-a-variable-is-set-in-bash
if [ -z "$id" ]
then
  echo "No DistributionId found. Meaning there was an error!!"
else
  echo "Found CloudFront CDN: ${id}"
  aws cloudfront create-invalidation --distribution-id ${id} --paths "/*"
  echo "Successful Invalidation! Goodbye! Natac"
fi