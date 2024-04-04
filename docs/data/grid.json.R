library("jsonlite")
grid <- readRDS("docs/data/grid_ind.RDS")
grid <- grid[!is.na(grid$"TIME_TOWN_5K_1"), ]
grid <- grid[grid$"TIME_TOWN_5K_1" > 0, ]
toJSON(grid)
