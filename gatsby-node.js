const path = require(`path`)

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules:
        stage === "build-html"
          ? [
              {
                test: /ScrollMagic/,
                use: loaders.null(),
              },
              {
                test: /scrollmagic/,
                use: loaders.null(),
              },
            ]
          : [],
    },
    resolve: {
      alias: {
        ScrollMagic: path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
        ),
        "animation.gsap": path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
        ),
        "debug.addIndicators": path.resolve(
          "node_modules",
          "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"
        ),
      },
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        pages: allWordpressPage {
          edges {
            node {
              slug
              template
              wordpress_id
            }
          }
        }

        posts: allWordpressPost {
          edges {
            node {
              slug
              wordpress_id
            }
          }
        }
      }
    `)

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else if (node.template === "tpl-messages.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/messages.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-about.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/about.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-ministries.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/ministries.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-mission.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/mission.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-jesus.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/jesus.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-events.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/events.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "tpl-page-home.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/home.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      } else if (node.template === "") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/defaultPage.js`),
          context: {
            id: node.wordpress_id,
          },
        })
      }
    })

    const posts = data.posts.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: `/news/${node.slug}/`,
        component: path.resolve("./src/templates/post.js"),
        context: {
          slug: node.slug,
          prev: index === 0 ? null : posts[index - 1].node.slug,
          next: index === posts.length - 1 ? null : posts[index + 1].node.slug,
        },
      })
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
