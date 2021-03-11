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
| Stopwatch | A timer that counts up to the `timeCap`. Example: count up to 2 minutes and 30 seconds.                                                                                                                                                                                      | `timeCap`                  |   |   |
| Countdown | A timer that counts down from the `startTime`. Example: count down to 0, starting at 2 minutes and 30 seconds.                                                                                                                                                                                                                            | `startTime`                |   |   |
| XY        | A timer that counts down from `timePerRound`, for X `rounds`. Example: 1 minute for 10 minutes would count down from 1 minute to 0, then start another countdown, etc, 10 times.                                                                                                       | `rounds` `timePerRound`      |   |   |
| TABATA    | An interval timer with work/rest periods. Example: 20s/10s, 8 rounds, would count down from 20 seconds to 0, then count down from 10 seconds to 8, then from 20, then from 10, etc, for 8 rounds. A full round includes both the work and rest. In this case, 20+10=30 seconds per round. | `rounds` `workTime` `restTime` |   |   |

<br/>

## Common Props and Functionality
Although each timer receives some props specific to that mode, there are some props that all timers should receive:

- `onStart`: a function that is called when the timer is started
- `onReset`: a function that is called when the timer is reset
- `onFinish`: a function that is called when the timer is done:
  - TABATA and XY when all rounds are done
  - Countdown: when the timer reaches 0
  - Stopwatch: when the time cap is reached

All timers should let the user start/pause/reset the timer.

<br/>

## Design
The UI is totally up to you and you should think about what’s useful for the user. You can add functionality if you think it adds value to the timer but you cannot remove the core features described in the requirements.

## Deliverables
- Describe your design decisions along with any documentation about the code in `DESIGN.md`
- Modify `Timer.js` with the required changes to provide all the functionality described above
- Add any additional files that you need

## Notes
- Please document your code as much as possible
- Avoid writing very large components, if they're become too large with a lot of configuration, break them up
- DRY (Don't Repeat Yourself) -> export common functionality to components / functions
- Have fun!