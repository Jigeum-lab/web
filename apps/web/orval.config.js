module.exports = {
  prestore: {
    input: {
      target: 'https://server.namju.store/v3/api-docs',
    },
    output: {
      mode: 'tags-split',
      target: 'src/models/petstore.ts',
      schemas: 'src/types/apis',
      client: 'react-query',
      mock: true,
      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          options: {
            staleTime: 300000,
          },
        },
        mutator: {
          path: './src/api/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
};
