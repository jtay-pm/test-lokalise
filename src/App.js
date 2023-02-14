import { IntlProvider, FormattedMessage } from 'react-intl';
import logo from './logo.svg';
import './App.css';
import EN from './lokalise-lang/en_CA.json';
import FR from './lokalise-lang/fr_CA.json';

function loadLocaleData(locale) {
  switch (locale) {
    case 'fr':
      return FR;
    default:
      return EN;
  }
}

function App() {
  const messages = loadLocaleData('fr');
  return (
    <IntlProvider locale='fr' messages={messages}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <FormattedMessage
              id="2KyvW0"
              description="How coverage works joint"
              defaultMessage="The unaffected partner’s policy will remain active."
            />
          </p>
          <p>
            <FormattedMessage
              id="6+zTcI"
              description="How coverage works joint"
              defaultMessage="If you get a partial payout, your policy will remain active."
            />
          </p>
          <p>
            <FormattedMessage
              id="7dTPue"
              description="How coverage works joint"
              defaultMessage="You’ll each start out with your own policy"
            />
          </p>
          <p>
            <FormattedMessage
              id="B+/blC"
              description="How coverage works joint"
              defaultMessage="Your total coverage <strong>will not decrease</strong> by the amount that’s already been paid out."
              values={{
                strong: (chunks) => <strong>{chunks}</strong>
              }}
            />
          </p>
          <p>
            <FormattedMessage
              id="I5s2uf"
              description="How coverage works joint"
              defaultMessage="If either or both of you are diagnosed with a critical illness, the affected partner(s) will submit a claim."
            />
          </p>
          <p>
            <FormattedMessage
              id="WMvSoH"
              description="Most people buy"
              defaultMessage="Most customers like you apply for <b>{cov, number, ::group-min-2 currency/CAD unit-width-narrow precision-integer}</b> in coverage over a <b>{term, number}-year</b> policy term"
              values={{
                b: (chunks) => <b>{chunks}</b>,
                cov: 100000,
                term: 10
              }}
            />
          </p>
          <p>
            <FormattedMessage
              id="af3SO9"
              description="How coverage works joint"
              defaultMessage="Once your claim is reviewed and approved, you’ll either get a full or partial payout depending on the condition."
            />
          </p>
          <p>
            <FormattedMessage
              id="dwFtmJ"
              description="Quote heading"
              defaultMessage="Let’s personalize your {isCI, select, true{critical illness insurance policy} other{life insurance}}"
              values={{
                isCI: true
              }}
            />
          </p>
          <p>
            <FormattedMessage
              id="mb1Raz"
              description="How the coverage works header"
              defaultMessage="How the coverage works"
            />
          </p>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
