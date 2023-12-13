import { Box, Skeleton, Stack } from "@mui/material";

export default function SkeletonCard() {
    return (
        <Box m={3}>
            <Skeleton
                variant="rectangular"
                sx={{ my: 2 }}
                width={290}
                height={130}
            />
            <Skeleton
                variant="rectangular"
                sx={{ my: 2 }}
                width={120}
                height={15}
            />
            <Skeleton
                variant="rectangular"
                sx={{ my: 1 }}
                width={290}
                height={15}
            />
            <Skeleton
                variant="rectangular"
                sx={{ my: 1 }}
                width={290}
                height={15}
            />
            <Stack direction="row" spacing={2} mt={3}>
                <Skeleton
                    variant="rectangular"
                    sx={{ my: 1 }}
                    width={120}
                    height={20}
                />
                <Skeleton
                    variant="rectangular"
                    sx={{ my: 1 }}
                    width={120}
                    height={20}
                />
            </Stack>
        </Box>
    );
}
