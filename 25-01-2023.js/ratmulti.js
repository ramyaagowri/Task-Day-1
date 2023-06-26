let N = 4; 
function printSolution(sol)
    {
        for (let i = 0; i < N; i++)
        {
            for (let j = 0; j < N; j++)
            {
                console.log(sol[i][j] + " ");
            }
        //   console.log("\n");
         }
    }

    
    function isSafe(maze, x, y)
    {
        
        if (x >= 0 && x < N && y >= 0 &&
            y < N && maze[x][y] != 0)
        {
            return true;
        }

        return false;
    }

   
    function solveMaze(maze)
    {
        let sol = [[0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]];

        if (solveMazeUtil(maze, 0, 0, sol) == false)
        {
           
            return false;
        }

        printSolution(sol);
        return true;
    }

    function solveMazeUtil(maze, x,
                                y, sol)
    {
        if (x == N - 1 && y == N - 1)
        {
            sol[x][y] = 1;
            return true;
        }

        if (isSafe(maze, x, y) == true)
        {

            sol[x][y] = 1;

            for (let i = 1; i <= maze[x][y] && i < N; i++)
            {

                if (solveMazeUtil(maze, x + i, y, sol) == true)
                {
                    return true;
                }

                if (solveMazeUtil(maze, x, y + i, sol) == true)
                {
                    return true;
                }
            }

            sol[x][y] = 0;
            return false;
        }

        return false;
    }
        let maze = [[2, 1, 0, 0],
                        [3, 0, 0, 1],
                        [0, 1, 0, 1],
                        [0, 0, 0, 1]];

        solveMaze(maze);