import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `<html>
        <body>
          <p>Para verificar tu cuenta, haz clic en el siguiente enlace:</p>
          <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}">Verify account</a>
        </body>
      </html>`;
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },

  fields: [
    {
      name: "role",
      defaultValue: "user",
      required: true,

      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
    },
  ],
};
