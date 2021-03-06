/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {

  sqlite: {
    database: 'sequelize',
    dialect: 'sqlite',
    options: {
      'dialect': 'sqlite',
      'storage': './sqlite.db'
    }
  },

  mysql: {
    'user': process.env.MYSQL_ENV_MYSQL_USER_NAME || "root",
    'password': process.env.MYSQL_ENV_MYSQL_USER_PASS || "root",
    'database': process.env.MYSQL_ENV_MYSQL_USER_DB ||'127.0.0.1',
    'dialect': 'mysql',
    options: {
      'host': process.env.MYSQL_PORT_3306_TCP_ADDR || "127.0.0.1",
      'port': process.env.MYSQL_PORT_3306_TCP_PORT || 3306,
      'dialect': 'mysql',
      'timezone': '+08:00'
    }
  },

  docker_mysql: {
    'user': "nodejsSample",
    'password': "nodejsSample",
    'database': "nodejsSample",
    'dialect': 'mysql',
    options: {
      'host': "mysql",
      'port': 3306,
      'dialect': 'mysql',
      'timezone': '+08:00'
    }
  }
};
