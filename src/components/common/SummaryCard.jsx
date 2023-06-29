import { Card, Typography } from "@mui/material";

export default function SummaryCard({ title, description }) {
  return (
    <Card
      sx={{
        p: 2,
      }}
    >
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h3">{description}</Typography>
    </Card>
  );
}
