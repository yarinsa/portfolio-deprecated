import React, { useState, useEffect } from "react";
import { ItemRenderer, MultiSelect } from "@blueprintjs/select";
import { CreateTechnologyInput } from "../../API";
import { MenuItem, Icon } from "@blueprintjs/core";
import { graphqlOperation, API } from "aws-amplify";
import { listTechnologys } from "../../graphql/queries";

interface TechnologySelectProps {
  onSelect: CallableFunction;
}

export const TechnologySelect: React.FC<TechnologySelectProps> = ({
  onSelect,
}) => {
  const [technologyList, setTechnologyList] = useState<CreateTechnologyInput[]>(
    []
  );
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    CreateTechnologyInput[]
  >([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      const result: any = await API.graphql(graphqlOperation(listTechnologys));
      setTechnologyList(result.data?.listTechnologys.items);
    };

    fetchTechnologies();
  }, []);

  const TechnologySelectEl = MultiSelect.ofType<CreateTechnologyInput>();

  const renderTechnology: ItemRenderer<CreateTechnologyInput> = (
    technology,
    { modifiers, handleClick }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        label={technology.id}
        key={technology.id}
        onClick={handleClick}
        text={technology.name}
        shouldDismissPopover={false}
      ></MenuItem>
    );
  };

  const renderTag = (technology: CreateTechnologyInput) => technology.id;

  const handleTagRemove = (_tag: string, index: number) => {
    setSelectedTechnologies(
      selectedTechnologies.filter((technology) => technology.id !== _tag)
    );
  };

  const handleClear = (event: React.MouseEvent) => setSelectedTechnologies([]);

  const selectTechnology = (technologyInput: CreateTechnologyInput) => {
    if (
      selectedTechnologies.find(
        (technology) => technology.id === technologyInput.id
      )
    )
      return;
    selectedTechnologies.push(technologyInput);
    onSelect(selectedTechnologies);
  };

  return (
    <TechnologySelectEl
      items={technologyList}
      itemRenderer={renderTechnology}
      noResults={<MenuItem disabled={true} text="No results." />}
      onItemSelect={(technology: CreateTechnologyInput) => {
        selectTechnology(technology);
      }}
      tagRenderer={renderTag}
      tagInputProps={{
        fill: true,
        onRemove: handleTagRemove,
        rightElement: <Icon icon="cross" onClick={handleClear} />,
      }}
      selectedItems={selectedTechnologies}
    ></TechnologySelectEl>
  );
};
