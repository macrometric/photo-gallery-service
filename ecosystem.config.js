module.exports = {
  apps: [
    {
      name: "photo-gallery-service",
      script: "server/index.js"
    }
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "ec2-3-93-54-61.compute-1.amazonaws.com",
      key: "~/.ssh/tutorial.pem",
      ref: "origin/master",
      repo: "git@github.com:the-home-repot/photo-gallery-service.git",
      path: "/home/ubuntu/photo-gallery-service",
      "post-deploy": "npm install && pm2 startOrRestart ecosystem.config.js"
    }
  }
};
