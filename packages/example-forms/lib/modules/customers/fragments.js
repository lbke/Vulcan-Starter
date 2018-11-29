import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment customerFragment on Customer {
    _id
    userId
    stage
    name
    notes
    meetingDate
    addresses
    categories
    isVIP
    product{
      name
    }
  }
`);