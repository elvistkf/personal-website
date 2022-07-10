import os
from scholarly import scholarly
from scholarly import ProxyGenerator

# pg = ProxyGenerator()
# pg.FreeProxies()
# scholarly.use_proxy(pg)


def fetch(old, new):
    open(new, 'w').write("")
    with open(old, 'r') as fin:
        with open(new, 'w') as fout:
            line = fin.readline()
            fout.write(line)
            while line:
                if "title" in line:
                    title = line.replace("title: \"", "").replace("\",", "").replace("\n", "").strip()
                    
                    # is_published = False
                    while True:
                        _sline = fin.readline()
                        if "status" in _sline:
                            is_published = "Published" in _sline
                        if "citation" in _sline:
                            if is_published:
                                search_query = scholarly.search_pubs(title)
                                num_citations = next(search_query).get('num_citations')
                                idx = _sline.find("citation:")
                                _nline = _sline[:idx] + f"citation: {num_citations},\n"
                                print(_nline)
                                fout.write(_nline)
                            else:
                                fout.write(_sline)
                            break
                        else:
                            fout.write(_sline)
                line = fin.readline()
                fout.write(line)

def main():
    fetch('conference.jsx', 'conference_updated.jsx')
    fetch('journal.jsx', 'journal_updated.jsx')

    os.replace('conference_updated.jsx', 'conference.jsx')
    os.replace('journal_updated.jsx', 'journal.jsx')

if __name__ == "__main__":
    while True:
        using_vpn = input("Are you using VPN?")
        if using_vpn.lower() == "yes":
            break
    main()



# Now search Google Scholar from behind a proxy
