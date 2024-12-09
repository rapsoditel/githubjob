import { useInfiniteQuery } from "react-query";
import {
  TextInput,
  Checkbox,
  Stack,
  Grid,
  Loader,
  Card,
  Alert,
  Flex,
  SimpleGrid,
  Text,
  Title,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { getJobs } from "../services/jobServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const JobList = () => {
  const form = useForm({
    initialValues: {
      description: "",
      location: "",
      full_time: false,
    },
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
    isError,
  } = useInfiniteQuery(
    ["jobs", form.values],
    ({ pageParam = 1 }) =>
      getJobs({
        ...form.values,
        full_time: form.values.full_time ? "true" : undefined,
        page: pageParam,
      }),
    {
      getNextPageParam: (lastPage, pages) =>
        lastPage.length ? pages.length + 1 : undefined,
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      if (
        hasNextPage &&
        !isFetchingNextPage &&
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const handleSearch = () => {
    refetch();
  };

  return (
    <Stack>
      <form onSubmit={form.onSubmit(handleSearch)}>
        <SimpleGrid cols={{md:3}}>
          <TextInput
            label="Job Description"
            placeholder="Search jobs description"
            {...form.getInputProps("description")}
          />
          <TextInput
            label="Location"
            placeholder="Search jobs by location"
            {...form.getInputProps("location")}
          />
          <Checkbox
            label="Full Time Only"
            styles={{
              root:{
                display: "flex",
                alignItems: "center"
              },
              body:{
                marginTop: "1.4dvw"
              }
            }}
            {...form.getInputProps("full_time", { type: "checkbox" })}
          />
        </SimpleGrid>
      </form>

      {isLoading ? (
        <Loader mx="auto"/>
      ) : (
        <SimpleGrid>
          {data?.pages.map((page) =>
            page.map(
              (job: any) =>
                job && (
                    <Link key={job.id} to={`job/${job.id}`} style={{textDecoration: "none"}}>
                      <Card shadow="sm" p="lg" radius="md">
                        <Title order={4}>{job.title}</Title>
                        <Group>
                          <Text>{job.location}</Text> - <Text c="green" fw="bold">{job.type}</Text>
                        </Group>
                      </Card>
                    </Link>
                )
            )
          )}
        </SimpleGrid>
      )}

      {isFetchingNextPage && !isError && <Loader mx="auto"/>}

      {!hasNextPage && !isLoading && !isError && (
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          All jobs are loaded
        </p>
      )}
    </Stack>
  );
};

export default JobList;
