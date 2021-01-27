# Assignment 2

## Objective
In this assignment we’re going to build a self-contained React component from scratch. By making this component self-contained with a well-defined API, you should be able to use it again with minimal modifications for your next assignment.
<br/>
<br/>
## Requirements
In the fitness world, there are lots of different ways a workout can be timed. For example, we can use a traditional stopwatch, a count-down timer, an interval timer, etc. To support our athletes, we’ll be building a **Timer** component that supports 4 modes:
<br/>
<br/>
| Mode      | Description                                                                                                                                                                                                                                                                            | Props                    |   |   |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|---|---|
| Stopwatch | A standard timer that counts up until the user stops the timer or it reaches a specified time cap                                                                                                                                                                                      | `timeCap`                  |   |   |
| Countdown | A timer that counts down from the time provided by the user                                                                                                                                                                                                                            | `startTime`                |   |   |
| XY        | This timer will run a countdown timer of Y, X times. For example, 1 minute for 10 minutes would run a countdown from 1 minute to 0, then start another countdown, etc, 10 times.                                                                                                       | `rounds` `timePerRound`      |   |   |
| TABATA    | Lets users time intervals of work/rest. For example, 20/10 second work/rest, 8 rounds, the timer would countdown from 20 seconds, then from 10, then from 20, then from 10, etc, for 8 rounds. A full round includes both the work and rest. In this case, 20+10=30 seconds per round. | `rounds` `workTime` `restTime` |   |   |

<br/>

## Common Props and Functionality
Although each timer receives some props specific to that mode, there are some props that all timers should receive:

`onStart`: a function that is called when the timer is started
`onFinish`: a function that is called when the timer is done
- TABATA and XY when all rounds are done
- Countdown: when the timer reaches 0
- Stopwatch: when the time cap is reached

All timers should let the user start/pause/reset the timer.


<br/>

## Design
The UI is totally up to you and you should think about what’s useful for the user. You can add functionality if you think it adds value to the timer but you cannot remove the core features described in the requirements.