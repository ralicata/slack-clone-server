export default `
    type Message {
        id: Int!
        text: String!
        user: User!
        channel: Channel!
    }

    type Channel {
        id: Int!
        name: String!
        public: Boolean!
        messages: [Message!]!
        users: [User!]!
    }

    type Team {
        id: Int!
        owner: User!
        members: [User!]!
        channels: [Channel!]!
    }

 

    type Query {
        hi: String
    }
`;
