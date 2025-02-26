import Badge from "../ui/Badge";

const BadgeTest = () => (
  <div className="flex flex-col gap-4">
    <Badge variant="outline" icon="dot" color="blue" size="small">
      Badge Blue Dot Small
    </Badge>
    <Badge variant="outline" icon="info" color="orange" size="medium">
      Badge Orange Info Medium
    </Badge>
    <Badge variant="outline" icon="info" color="red" size="small">
      Badge Red Info Small
    </Badge>
    <Badge variant="outline" icon="dot" color="green" size="medium">
      Badge Green Dot Medium
    </Badge>
    <Badge variant="outline" icon="dot" color="gray" size="medium">
      Badge Green Dot Medium
    </Badge>

    <Badge variant="solid" icon="dot" color="blue" size="small">
      Badge Blue Dot Small
    </Badge>
    <Badge variant="solid" icon="info" color="orange" size="medium">
      Badge Orange Info Medium
    </Badge>
    <Badge variant="solid" icon="info" color="red" size="small">
      Badge Red Info Small
    </Badge>
    <Badge variant="solid" icon="dot" color="green" size="medium">
      Badge Green Dot Medium
    </Badge>
    <Badge variant="solid" icon="dot" color="gray" size="medium">
      Badge Green Dot Medium
    </Badge>
    <Badge icon="KNOWLEDGE" color="green">
      Knowledge
    </Badge>
    <Badge icon="COMPONENT" color="purple">
      Component
    </Badge>
    <Badge icon="WORKFLOW" color="blue">
      Workflow{" "}
    </Badge>
    <Badge>Badge All Defaults</Badge>
  </div>
);

export default BadgeTest;
