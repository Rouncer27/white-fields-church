const path = require(`path`)
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

        series: allWordpressWpMessageType {
          edges {
            node {
              wordpress_id
              slug
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
      } else if (node.template === "tpl-contact.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/contact.js`),
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
      } else if (node.template === "tpl-livefeed.php") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/liveFeed.js`),
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

    const series = data.series.edges
    series.forEach(({ node }, index) => {
      createPage({
        path: `/series/${node.slug}/`,
        component: path.resolve("./src/templates/series.js"),
        context: {
          id: node.wordpress_id,
          slug: node.slug,
          prev: index === 0 ? null : series[index - 1].node.slug,
          next:
            index === series.length - 1 ? null : series[index + 1].node.slug,
        },
      })
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
