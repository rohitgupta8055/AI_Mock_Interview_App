/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:bcKSN6QPdx0g@ep-damp-rice-a5gzfvuh.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require'
    }
  };

