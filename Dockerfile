FROM mhart/alpine-node:base-8
LABEL Maintainer Kevin Gimbel <docker@kevingimbel.com>

WORKDIR /src
ADD . .

EXPOSE 3000
CMD ["node", "index.js"]

