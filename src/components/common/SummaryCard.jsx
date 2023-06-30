import { Card, Chip, Stack, Typography } from "@mui/material";

export default function SummaryCard({ title, description, categories }) {
  return (
    <Card
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h5">{title}</Typography>
      {description ? (
        <Typography variant="h3">{description}</Typography>
      ) : (
        <Stack direction={"row"} gap={1}>
          {categories.map((item) => (
            <Chip label={item}></Chip>
          ))}
        </Stack>
      )}
    </Card>
  );
}
