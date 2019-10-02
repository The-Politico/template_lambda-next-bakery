![](https://www.politico.com/interactives/cdn/images/badge.svg)

# <%=github_repo%>

## Development docs

- [Deploying infrastructure](docs/deploying-infrastructure.md)

- [Developing your app](docs/developing-your-app.md)


## Lambda environment

Once you deploy your Lambda instance, make sure you set these variables in its environment.

```
AWS_PUBLISH_ACCESS_KEY_ID=
AWS_PUBLISH_SECRET_ACCESS_KEY=
AWS_BUCKET_NAME=
AWS_CLOUDFRONT_DISTRIBUTION=
API_VERIFICATION_TOKEN=
```

The variable `LAMBDA` should already be set.

## Testing

Make sure you're running Node v10.X:

```
$ nvm use 10
```

Run the server:

```
$ node test/bakery/index.js
```

Hit the API with data to see pages bake to `tmp/bakery/pages`.
