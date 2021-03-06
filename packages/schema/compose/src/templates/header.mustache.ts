const template = `### Web3API Header START ###
scalar UInt
scalar UInt8
scalar UInt16
scalar UInt32
scalar UInt64
scalar Int
scalar Int8
scalar Int16
scalar Int32
scalar Int64

directive @imported(
  uri: String!
  namespace: String!
  nativeType: String!
) on OBJECT

directive @imports(
  types: [String!]!
) on OBJECT
### Web3API Header END ###

{{schema}}
`;

export { template };
