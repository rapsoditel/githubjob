import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Box, Button, Card, Loader, Text, Title } from "@mantine/core";
import { getJobDetail } from "../services/jobServices";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(["jobDetail", id], () =>
    getJobDetail(id || "")
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <Button onClick={() => navigate(-1)} variant="outline" mb="lg">Back</Button>
      <Card shadow="sm" p="lg" radius="md">
        <Title order={1}>{data.title}</Title>
        <Text>
          {data.location} - {data.type}
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: data.description }} />
      </Card>
    </>
  );
};

export default JobDetail;
