# wmarrujo.com

## Developing

### Setup

run `npm install`

### Running

run `npm run dev`

## Publishing

update the version in the `package.json`

### Building

run `npm run build`

the project is using the `node` adapter

preview with `npm run preview`<br>
or alternately preview with `HOST=127.0.0.1 PORT=3000 node build/index.js`

### Deploying

copy the files to the server `scp -pr package.json build wmarrujo@wmarrujo.com:/var/www/wmarrujo/X.Y.Z`<br>
log on to the server and go to the `/var/www/wmarrujo` directory<br>
re-bind the latest symlink `rm latest && ln -s X.Y.Z latest`<br>
navigate inside the `latest` directory (or the `X.Y.Z` directory)<br>
download necessary node dependencies `yarn install --prod`<br>
reload server `pm2 restart wmarrujo`

#### Server Configuration

where files are stored
```
/
└ var
	└ www
		├ Caddyfile						<- proxy server configuration file
		└ wmarrujo
			├ ecosystem.config.js		<- pm2's configuration file
			├ latest					<- symlink to latest version
			├ 0.1.0
			┊
			└ X.Y.Z						<- versions of the project
				├ package.json			<- must include package.json
				├ build					<- project files
				├ node_modules
				└ yarn.lock
```

if on the tiny $4/mo server, in order to run `npm install` you have to give the server some more memory (swap memory) with:
```bash
sudo /bin/dd if=/dev/zero of=/var/swap.1 bs=1M count=1024
sudo /sbin/mkswap /var/swap.1
sudo /sbin/swapon /var/swap.1
```

have `yarn` installed to use instead (since it uses less memory)
