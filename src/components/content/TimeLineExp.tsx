import classNames from 'classnames'
import AnimationContainer from '../utils/AnimationContainer'
import { type TimelineEventProps } from '../../types'

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-white lg:text-start">
        Experience
      </h2>

      {children}
    </AnimationContainer>
  )
}

export const TimelineEvent = ({ active, children, last }: TimelineEventProps) => {
  return (
    <div
      className={classNames('flex w-full justify-start gap-6 border-neutral-800', {
        'border-l': !(last ?? false),
        'pb-16': !(last ?? false),
      })}
    >
      <div className="relative">
        <div
          className={classNames(
            'absolute left-[-8.5px] top-[-2px] aspect-square h-4 w-4 rounded-full outline-black',
            {
              'bg-emerald-500': active,
              'bg-neutral-800': !(active ?? false),
              'h-3 w-3': !(active ?? false),
              'left-[-5.5px]': !(active ?? false),
            }
          )}
        >
          {(active ?? false) && (
            <div
              className={classNames(
                'absolute left-0 top-0 -z-10 aspect-square w-4 animate-ping rounded-full bg-emerald-500'
              )}
            />
          )}
        </div>
      </div>
      <div className="mt-[-8px] flex flex-col gap-2">{children}</div>
    </div>
  )
}

const TimelineEventTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base text-gray-400">{children}</p>
)

const TimelineEventDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-400">{children}</p>
)

TimelineEvent.Title = TimelineEventTitle

TimelineEvent.Description = TimelineEventDescription
