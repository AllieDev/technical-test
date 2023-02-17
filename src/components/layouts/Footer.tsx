import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      sx={{
        height: 100,
        backgroundColor: "primary.dark",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Typography variant="body1" component="span" sx={{ color: "#fff" }}>
        © COPYRIGHT ALI ASGHAR SULTANI - 2023
      </Typography>
    </Box>
  );
}
