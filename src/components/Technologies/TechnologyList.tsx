import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TechnologyListItem } from "./TechnologyListItem";
import { listTechnologys } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { CreateTechnologyInput } from "../../API";
import { Toaster } from "../Toaster";
import { imageKeyToUrl } from "../../api/aws.service";

interface TechnologyListProps {
  technologies?: string[];
}
export const TechnologyList: React.FC<TechnologyListProps> = ({
  technologies,
}) => {
  const [technologyList, setTechnologyList] = useState<CreateTechnologyInput[]>(
    []
  );
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const result: any = await API.graphql(
          graphqlOperation(listTechnologys)
        );
        let list = await fetchImages(result.data.listTechnologys.items);
        setTechnologyList(list);

        if (technologies) {
          const filteredList = technologies.map((technology) => {
            return list.find(
              (technologyItem) => technologyItem.id === technology
            );
          });
          console.log(filteredList);
          setTechnologyList(filteredList as CreateTechnologyInput[]);
        }
        setisLoading(false);
      } catch (error) {
        Toaster.show({
          intent: "danger",
          icon: "error",
          message: "There was problem retrieving technologies",
        });
      }
    };

    const fetchImages = async (technologies: CreateTechnologyInput[]) => {
      return Promise.all(
        technologies.map(async (technology, technologyIndex) => {
          let url = await imageKeyToUrl(technology.image);
          return { ...technologies[technologyIndex], image: url + "" };
        })
      ); //end of technologies list map
    }; //end of fetch images
    // if (technologies) {
    //   setTechnologyList(technologies);
    // } else {
    fetchTechnologies();
    // }
  }, []);

  const displayImages = (technologies: CreateTechnologyInput[]) => {
    const el = technologies.map((technology, index) => {
      return (
        <TechnologyListItem
          key={technology.id}
          image={technology.image}
          name={technology.name}
          isLoaded={isLoading}
        />
      );
    });
    return el;
  };

  return <Root>{displayImages(technologyList)}</Root>;
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;
