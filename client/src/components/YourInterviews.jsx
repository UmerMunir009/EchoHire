import React from "react";
import { dummyInterviews } from "../constants";
import { Calendar, Star } from "lucide-react";

export const techIconMap = {
  react: "devicon-react-original colored",
  reactjs: "devicon-react-original colored",
  reactjs: "devicon-react-original colored",
  next: "devicon-nextjs-original",
  nextjs: "devicon-nextjs-original",
  vue: "devicon-vuejs-plain colored",
  vuejs: "devicon-vuejs-plain colored",

  express: "devicon-express-original",
  expressjs: "devicon-express-original",
  node: "devicon-nodejs-plain colored",
  nodejs: "devicon-nodejs-plain colored",

  mongodb: "devicon-mongodb-plain colored",
  mongo: "devicon-mongodb-plain colored",
  mongoose: "devicon-mongodb-plain-wordmark",
  mysql: "devicon-mysql-plain colored",
  postgresql: "devicon-postgresql-plain colored",
  sqlite: "devicon-sqlite-plain colored",

  firebase: "devicon-firebase-plain colored",
  docker: "devicon-docker-plain colored",
  kubernetes: "devicon-kubernetes-plain colored",
  aws: "devicon-amazonwebservices-original colored",
  azure: "devicon-azure-plain colored",
  gcp: "devicon-googlecloud-plain colored",
  digitalocean: "devicon-digitalocean-plain colored",
  heroku: "devicon-heroku-original colored",
  amplify: "devicon-amplify-plain colored",

  photoshop: "devicon-photoshop-plain colored",
  figma: "devicon-figma-plain colored",

  html: "devicon-html5-plain colored",
  html5: "devicon-html5-plain colored",
  css: "devicon-css3-plain colored",
  css3: "devicon-css3-plain colored",
  sass: "devicon-sass-original colored",
  scss: "devicon-sass-original colored",
  less: "devicon-less-plain colored",
  tailwind: "devicon-tailwindcss-plain colored",
  tailwindcss: "devicon-tailwindcss-plain colored",
  bootstrap: "devicon-bootstrap-plain colored",
  jquery: "devicon-jquery-plain colored",

  ts: "devicon-typescript-plain colored",
  typescript: "devicon-typescript-plain colored",
  js: "devicon-javascript-plain colored",
  javascript: "devicon-javascript-plain colored",

  angular: "devicon-angular-plain colored",
  angularjs: "devicon-angular-plain colored",
  ember: "devicon-ember-original colored",
  emberjs: "devicon-ember-original colored",
  backbone: "devicon-backbonejs-plain colored",
  backbonejs: "devicon-backbonejs-plain colored",

  nest: "devicon-nestjs-plain colored",
  nestjs: "devicon-nestjs-plain colored",
  graphql: "devicon-graphql-plain colored",
  apollo: "devicon-apollo-plain colored",

  webpack: "devicon-webpack-plain colored",
  babel: "devicon-babel-plain colored",
  rollup: "devicon-rollup-plain colored",
  rollupjs: "devicon-rollup-plain colored",
  parcel: "devicon-parcel-plain colored",
  parceljs: "devicon-parcel-plain colored",

  npm: "devicon-npm-original-wordmark",
  yarn: "devicon-yarn-plain colored",

  git: "devicon-git-plain colored",
  github: "devicon-github-original",
  gitlab: "devicon-gitlab-plain colored",
  bitbucket: "devicon-bitbucket-original colored",

  prisma: "devicon-prisma-original colored",
  redux: "devicon-redux-original colored",
  flux: "devicon-redux-original colored",

  redis: "devicon-redis-plain colored",

  selenium: "devicon-selenium-original colored",
  cypress: "devicon-cypress-plain colored",
  jest: "devicon-jest-plain colored",
  mocha: "devicon-mocha-plain colored",
  chai: "devicon-chai-plain colored",
  karma: "devicon-karma-plain colored",

  vuex: "devicon-vuejs-plain colored",
  nuxt: "devicon-nuxtjs-plain colored",
  nuxtjs: "devicon-nuxtjs-plain colored",

  strapi: "devicon-strapi-plain colored",
  wordpress: "devicon-wordpress-plain colored",
  contentful: "devicon-contentful-plain colored",
  netlify: "devicon-netlify-plain colored",
  vercel: "devicon-vercel-plain colored",
};


const YourInterviews = () => {
  return (
    <div className="max-w-[90%] mx-auto py-10 bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Your Interviews</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyInterviews.map((interview) => (
          <div
            key={interview.id}
            className="relative rounded-2xl shadow-lg p-5 bg-[var(--color-herobg)] border border-[var(--color-border)] hover:shadow-xl transition flex flex-col"
          >
            <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {interview.type}
            </span>

            <div className="flex justify-start mb-4">
              <div className="w-14 h-14 rounded-full bg-blue-00 flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {interview.role.charAt(0)}
                </span>
              </div>
            </div>

            <h3 className="text-md font-semibold text-center mb-2">
              {interview.role} 
            </h3>

            <div className="flex items-center justify-center gap-4 mb-3 text-sm opacity-80">
              <div className="flex items-center gap-1">
                <Calendar size={16} />{" "}
                {new Date(interview.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Star size={16} /> ---/100
              </div>
            </div>

            <p className="text-sm text-center mb-4 opacity-90">
              You haven’t taken the interview yet. Take it now to improve your
              skills.
            </p>

            <div className="flex justify-between items-center text-[10px]">
              <div className=" flex justify-between items-center text-[10px]">
                <div className="flex gap-2 flex-wrap">
                  {interview.techstack.slice(0, 3).map((tech) => {
                    const normalizedTech = tech
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .replace(/\./g, "");
                    return (
                      <i
                        key={tech}
                        className={`${
                          techIconMap[normalizedTech] || "devicon-code-plain"
                        } text-xl`}
                        title={tech}
                      ></i>
                    );
                  })}
                  {interview.techstack.length > 3 && (
                    <span className="text-xs opacity-70">
                      +{interview.techstack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <button className="px-4 py-2 bg-purple-600 text-white text-[10px] sm:text-sm font-medium rounded-lg hover:bg-purple-700 transition">
                View Interview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourInterviews;
