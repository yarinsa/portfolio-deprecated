//This is a helper service for AWS services

import { Storage } from "aws-amplify";

export const imageKeysToUrls = async (imageKeys: string[]) => {
  const urls = await Promise.all(
    imageKeys.map(async (imageKey) => {
      const url = (await Storage.get(imageKey)) + "";
      return _makePublicUrl(url);
    })
  );
  return urls;
};

export const imageKeyToUrl = async (imageKey: string) => {
  const url = (await Storage.get(imageKey)) + "";
  return _makePublicUrl(url);
};

const _makePublicUrl = (url: string) => {
  return url.split("?")[0];
};
