import { graphqlOperation, API } from "aws-amplify";
import { listTechnologys } from "../../graphql/queries";
import { CreateTechnologyInput } from "../../API";

export const getTechnologiesList = async () => {
  return await API.graphql(graphqlOperation(listTechnologys));
};

const technologiesService = {
  getTechnologiesList: getTechnologiesList,
};

export default technologiesService;
