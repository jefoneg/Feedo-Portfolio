import Links from "../models/links";

/**
 * Gets the link from array that contains links data.
 * @param    {string}              linkName   The link name identifier.
 * @param    {Links[]}             links      The links array.
 * @returns  {Links | undefined}              The found link.
 */
function getLink(linkName: string, links: any): Links {
  return links.find((link: Links) => linkName === link.name) as Links;
}

export default getLink;
