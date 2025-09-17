import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import styles from "./next-steps.module.css";

export const GETTING_STARTED_STEPS = [
  {
    message: "Press and hold the <b>ALT</b> key to active 'Click-to-Source' mode",
  },
  {
    message: "Select the title of this page while keeping the <b>ALT</b> key pressed",
    hint: 'Edit the title and save the changes. If your editor does not open, have a look at <a href="https://github.com/yyx990803/launch-editor#supported-editors" target="_blank">this page</a> to set the correct <code>LAUNCH_EDITOR</code> value.',
  },
  {
    message:
      "<b>Update</b> now the <code>routeLoader$</code> defined in the <code>src/routes//layout.tsx</code> file",
    hint: "Instead of returning the current date, you could return any possible string.<br />The output is displayed in the footer.",
  },
  {
    message: "Create a <b>new Route</b> called <code>/me</code>",
    hint: 'Create a new directory called <code>me</code> in <code>src/routes</code>. Within this directory create a <code>index.tsx</code> file or copy the <code>src/routes/index.tsx</code> file. Your new route is now accessible <a href="/me" target="_blank">here</a> ✨',
  },
  {
    message: "Time to have a look at <b>Forms</b>",
    hint: 'Open <a href="/demo/todolist" target="_blank">the TODO list App</a> and add some items to the list. Try the same with disabled JavaScript 🐰',
  },
  {
    message: "<b>Congratulations!</b> You are now familiar with the basics! 🎉",
    hint: "If you need further info on how to use qwik, have a look at <a href='https://qwik.builder.io' target='_blank'>qwik.builder.io</a> or join the <a href='https://qwik.builder.io/chat' target='_blank'>Discord channel</a>.",
  },
];

export default component$(() => {
  const gettingStartedStep = useSignal(0);

  useOnWindow(
    "keydown",
    $((e) => {
      if ((e as KeyboardEvent).key === "Alt") {
        gettingStartedStep.value = 1;
      }
    })
  );

  return (
    <div class="container container-purple container-center">
      <h2>
        Time for a quick
        <br />
        <span class="highlight">qwik intro</span>?
      </h2>
      <div class={styles.gettingstarted}>
        <div class={styles.intro}>
          {(() => {
            const step = GETTING_STARTED_STEPS[gettingStartedStep.value];
            const message = step.message;
            // Parse HTML-like content safely
            const parts = message.split(/(<[^>]+>)/);
            return parts.map((part, index) => {
              if (part.startsWith("<b>") && part.endsWith("</b>")) {
                return (
                  <strong key={`message-bold-${index}-${part.slice(3, -4).slice(0, 10)}`}>
                    {part.slice(3, -4)}
                  </strong>
                );
              } else if (part.startsWith("<code>") && part.endsWith("</code>")) {
                return (
                  <code key={`message-code-${index}-${part.slice(6, -7).slice(0, 10)}`}>
                    {part.slice(6, -7)}
                  </code>
                );
              } else if (part.trim()) {
                return <span key={`message-text-${index}-${part.slice(0, 10)}`}>{part}</span>;
              }
              return null;
            });
          })()}
        </div>
        <span class={styles.hint}>
          {(() => {
            const step = GETTING_STARTED_STEPS[gettingStartedStep.value];
            const hint = step.hint;
            if (!hint) return null;
            // Parse HTML-like content safely
            const parts = hint.split(/(<[^>]+>)/);
            return parts.map((part, index) => {
              if (part.startsWith('<a href="') && part.includes('">') && part.endsWith("</a>")) {
                const hrefMatch = part.match(/href="([^"]+)"/);
                const textMatch = part.match(/>([^<]+)</);
                const targetMatch = part.match(/target="([^"]+)"/);
                if (hrefMatch && textMatch) {
                  return (
                    <a
                      key={`hint-link-${index}-${hrefMatch[1].slice(0, 10)}`}
                      href={hrefMatch[1]}
                      target={targetMatch ? targetMatch[1] : undefined}
                      rel={targetMatch?.[1] === "_blank" ? "noopener" : undefined}
                    >
                      {textMatch[1]}
                    </a>
                  );
                }
              } else if (part.startsWith("<code>") && part.endsWith("</code>")) {
                return (
                  <code key={`hint-code-${index}-${part.slice(6, -7).slice(0, 10)}`}>
                    {part.slice(6, -7)}
                  </code>
                );
              } else if (part.startsWith("<br />")) {
                return <br key={`hint-br-${index}-${part}`} />;
              } else if (part.trim()) {
                return <span key={`hint-text-${index}-${part.slice(0, 10)}`}>{part}</span>;
              }
              return null;
            });
          })()}
        </span>
      </div>
      {gettingStartedStep.value + 1 < GETTING_STARTED_STEPS.length ? (
        <button type="button" class="button-dark" onClick$={() => gettingStartedStep.value++}>
          Continue with Step {gettingStartedStep.value + 2} of {GETTING_STARTED_STEPS.length}
        </button>
      ) : (
        <button
          type="button"
          class="button-dark"
          onClick$={() => {
            gettingStartedStep.value = 0;
          }}
        >
          Re-Start
        </button>
      )}
    </div>
  );
});
